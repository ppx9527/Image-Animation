class Cookie{
  private readonly cookie: string;
  public readonly cookieValue: string;

  constructor(name: string){
    this.cookie = name;
    this.cookieValue = Number.parseInt((Math.random() * 100000000).toString()).toString();
    if (this.getCookie() !== ''){
      this.delCookie();
    }
    this.setCookie();
  }

  getCookie() {
    const reg = `(^| )${this.cookie}=([^;]*)(;|$)`; // 这个正则表达式我也不是很理解
    const a = document.cookie.match(reg);
    if (a) {
      return decodeURIComponent(a[2]);
    } else {
      return '';
    }
  }

  delCookie() {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie = `${this.cookie}=${this.cookieValue}` +';expires=' + exp.toUTCString();
  }

  setCookie(){
    document.cookie = `${this.cookie}=${this.cookieValue}; SameSite=None; Secure`;
  }
}

export default Cookie;