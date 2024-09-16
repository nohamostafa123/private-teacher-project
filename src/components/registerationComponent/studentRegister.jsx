import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

export default function StudentRegister() {
  return (
    <section className="register">
      <div className="container-fluid">
        <div className="sign_content">
          <div className="logo">
            <a href="#">
              <img src="./images/logo.png" alt="Logo" />
              <div className="logo_title">
                <h1>مدرس خصوصي</h1>
                <h3>إختيارك الأفضل</h3>
              </div>
            </a>
          </div>
          <h4>سجل كطالب</h4>

          <form action="" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="first_name"
                className="form-control"
                placeholder="الأسم الأول"
              />
              <span className="fa fa-user"></span>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="last_name"
                className="form-control"
                placeholder="الأسم الأخير"
              />
              <span className="fa fa-user"></span>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="البريد الألكتروني"
              />
              <span className="fa fa-envelope"></span>
            </div>

            <div className="form-group">
              <select name="country_id" required className="form-control">
                <option value="15" style={{ color: 'black' }}>الأمارات</option>
                <option value="21" style={{ color: 'black' }}>البحرين</option>
                <option value="14" style={{ color: 'black' }}>السعودية</option>
                <option value="18" style={{ color: 'black' }}>الكويت</option>
                <option value="19" style={{ color: 'black' }}>عمان</option>
                <option value="30" style={{ color: 'black' }}>مصر</option>
              </select>
              <span className="fa fa-flag"></span>
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="كلمة المرور"
              />
              <span className="fa fa-lock"></span>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="repassword"
                className="form-control"
                placeholder="تأكيد كلمة المرور"
              />
              <span className="fa fa-lock"></span>
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" name="remember" className="form-control" />
                تذكرني
              </label>
            </div>

            <div className="form-group">
              <div className="g-recaptcha" data-sitekey="6Lfjsy4iAAAAAPPS5H5ILT2W0sHzYsboc457o-0v"></div>
              <small className="text-danger"></small>
            </div>

            <div className="form-group">
              <input type="submit" className="btn" value="التسجيل" />
            </div>
          </form>

          <h6>
            لدي حساب بالفعل <a href="/">تسجيل الدخول</a>
          </h6>
        </div>
      </div>
    </section>
  );
}
