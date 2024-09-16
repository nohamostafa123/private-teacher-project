import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

export default function TeacherRegister() {
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
          <h4>سجل كمدرس</h4>

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
              <select className="form-control" name="subject_id" required>
                <option disabled selected>
                  اختار اسم المادة&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </option>
                <option value="26" style={{ backgroundColor: '#1B62A4' }}>
                  الاحياء
                </option>
                <option value="8" style={{ backgroundColor: '#1B62A4' }}>
                  التاريخ
                </option>
                <option value="7" style={{ backgroundColor: '#1B62A4' }}>
                  الجغرافيا
                </option>
                <option value="6" style={{ backgroundColor: '#1B62A4' }}>
                  الرياضيات
                </option>
                <option value="5" style={{ backgroundColor: '#1B62A4' }}>
                  العلوم
                </option>
                <option value="28" style={{ backgroundColor: '#1B62A4' }}>
                  الفلسفة
                </option>
                <option value="24" style={{ backgroundColor: '#1B62A4' }}>
                  الفيزياء
                </option>
                <option value="25" style={{ backgroundColor: '#1B62A4' }}>
                  الكيمياء
                </option>
                <option value="3" style={{ backgroundColor: '#1B62A4' }}>
                  اللغة الأنجليزية
                </option>
                <option value="23" style={{ backgroundColor: '#1B62A4' }}>
                  اللغة الفرنسية
                </option>
                <option value="2" style={{ backgroundColor: '#1B62A4' }}>
                  اللغه العربية
                </option>
                <option value="27" style={{ backgroundColor: '#1B62A4' }}>
                  علم النفس
                </option>
              </select>
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
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="رقم الجوال"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                }}
              />
              <span className="fa fa-phone"></span>
            </div>

            <div className="form-group">
              <textarea
                name="teacher_desc"
                required
                className="form-control"
                rows="5"
                placeholder="وصف خاص بك"
              ></textarea>
              <span className="fa fa-address-book"></span>
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
              <div
                className="g-recaptcha"
                data-sitekey="6Lfjsy4iAAAAAPPS5H5ILT2W0sHzYsboc457o-0v"
              ></div>
              <small className="text-danger"></small>
            </div>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  className="form-control"
                />
                تذكرني
              </label>
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
