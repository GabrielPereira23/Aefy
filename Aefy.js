class Aefy {
  url = null;
  method = null;
  content = null;
  contentString = null;
  ready = false;
  
  error(code, message) {
    this.reset();
    console.error(`AEFY - Error ${code}, ${message}`);
  }

  reset() {
    this.url = null;
    this.method = null;
    this.content = null;
    this.contentString = null;
    this.ready = false;
  }

  validation() {
    if (!this.url) {
      this.error(1, "Request url not defined");
      return false;
    }
    if (!this.method) {
      this.error(2, "Request method not defined");
      return false;
    }
    if (!this.contentString) {
      this.error(3, "Request content not defined");
      return false;
    }
  }
}