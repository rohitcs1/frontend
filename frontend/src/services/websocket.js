export class MineSocketClient {
  constructor(url) {
    this.url = url;
    this.socket = null;
    this.listeners = new Map();
  }

  connect() {
    if (this.socket) return this.socket;

    this.socket = {
      readyState: 1,
      send: () => undefined,
      close: () => undefined,
    };

    return this.socket;
  }

  on(eventName, callback) {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }
    this.listeners.get(eventName).push(callback);
  }

  emit(eventName, payload) {
    const handlers = this.listeners.get(eventName) || [];
    handlers.forEach((handler) => handler(payload));
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}
