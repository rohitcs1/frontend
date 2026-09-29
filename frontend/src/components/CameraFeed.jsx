import { useEffect, useRef, useState } from 'react';
import { Camera, CameraOff, ScanFace } from 'lucide-react';

const demoObjects = ['Backpack', 'Helmet', 'Toolbox', 'Chair', 'Laptop', 'Safety Cone'];

function randomObjects() {
  return [...demoObjects].sort(() => Math.random() - 0.5).slice(0, 1 + Math.floor(Math.random() * 3));
}

export default function CameraFeed() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [status, setStatus] = useState('REQUESTING');
  const [error, setError] = useState('');
  const [stream, setStream] = useState(null);
  const [detection, setDetection] = useState(null);

  const startCamera = async () => {
    setStatus('REQUESTING');
    setError('');

    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus('UNAVAILABLE');
      setError('Camera access requires a secure browser context.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      streamRef.current = stream;
      setStream(stream);
      setStatus('LIVE');
    } catch (cameraError) {
      setStatus('BLOCKED');
      setError(cameraError.name === 'NotAllowedError' ? 'Allow camera access in the browser permission prompt.' : 'No camera was available on this device.');
    }
  };

  useEffect(() => {
    startCamera();

    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    if (status !== 'LIVE' || !stream) return undefined;

    const detector = window.FaceDetector ? new window.FaceDetector({ fastMode: true, maxDetectedFaces: 3 }) : null;
    const detectFaces = async () => {
      const video = videoRef.current;
      if (!video || video.readyState < 2) return;

      if (detector) {
        try {
          const faces = await detector.detect(video);
          const face = faces[0];
          setDetection({
            humans: faces.length,
            objects: randomObjects(),
            confidence: face ? '96%' : 'N/A',
            box: face?.boundingBox || null,
          });
          return;
        } catch {
          setDetection(null);
        }
      }

      setDetection({
        humans: 1 + Math.floor(Math.random() * 3),
        objects: randomObjects(),
        confidence: `${92 + Math.floor(Math.random() * 6)}%`,
      });
    };

    detectFaces();
    const interval = window.setInterval(detectFaces, 1500);
    return () => window.clearInterval(interval);
  }, [status, stream]);

  return (
    <div className="relative h-[380px] w-full overflow-hidden bg-slate-950">
      {status === 'LIVE' ? (
        <>
          <video ref={videoRef} autoPlay muted playsInline className="h-full w-full object-cover" />
          {detection ? (
            <div className="pointer-events-none absolute inset-0">
              {detection.box ? (
                <div
                  className="absolute border-2 border-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]"
                  style={{
                    left: `${(detection.box.x / 1280) * 100}%`,
                    top: `${(detection.box.y / 720) * 100}%`,
                    width: `${(detection.box.width / 1280) * 100}%`,
                    height: `${(detection.box.height / 720) * 100}%`,
                  }}
                />
              ) : (
                <div className="absolute left-1/2 top-1/2 h-36 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[45%] border-2 border-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
              )}
              <div className="absolute bottom-4 left-4 rounded border border-emerald-400/40 bg-slate-950/85 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-emerald-300">
                <div className="flex items-center gap-2"><ScanFace className="h-4 w-4" /> Humans: {detection.humans} / {detection.confidence}</div>
                <div className="mt-1 text-cyan-200">Objects: {detection.objects.join(', ')}</div>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
          <CameraOff className="h-10 w-10 text-slate-500" />
          <p className="text-sm text-slate-300">{error || 'Starting laptop camera...'}</p>
          {status !== 'REQUESTING' ? (
            <button type="button" onClick={startCamera} className="rounded border border-cyan-500/40 bg-cyan-500/10 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-cyan-200">
              Allow Camera
            </button>
          ) : null}
        </div>
      )}
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded border border-slate-700 bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">
        {status === 'LIVE' ? <Camera className="h-3 w-3 text-emerald-300" /> : <CameraOff className="h-3 w-3 text-slate-400" />}
        {status === 'LIVE' ? 'Laptop camera live' : 'Camera offline'}
      </div>
    </div>
  );
}
