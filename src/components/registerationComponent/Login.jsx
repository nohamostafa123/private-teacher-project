import React from 'react'
import './style.css';
export default function Login() {
  return (
    <section className="register">
        <div className="container-fluid">
            <div className="sign_content">
                <div className="logo">
                    <a href="/">
                        <img src="./images/logo.png "/>
                        <div className="logo_title">
                            <h1>مدرس خصوصي</h1>
                            <h3>إختيارك الأفضل</h3>
                        </div>
                    </a>
                </div>
                <h4>تسجيل الدخول</h4>
    
                <form action="" method="POST">
                    <div className="row text-center">
                      <div className="col-lg-12">
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">              
                            <label className="btn btn-secondary active student-btn">
                            <input type="radio" name="type" id="option2" value="1" autoComplete="off"  checked/> طالب
                          </label>
                          <label className="btn btn-secondary teacher-btn ">
                            <input type="radio" name="type" id="option1" value="2" autoComplete="off" /> مدرس
                          </label>
                        </div>
                      </div>
                    </div>
                    <br/>
    
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" value="" placeholder="البريد الألكتروني"/>
                        <span className="fa fa-envelope"></span>
                    </div>
                    
                    <div className="form-group">
                        <input type="password" name="password" className="form-control" placeholder="كلمة المرور"/>
                        <span className="fa fa-lock"></span>
                    </div>
                    <div className="form-group">
                        <label><input type="checkbox" name="remember" className="form-control"/>تذكرني</label>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="" className="btn" value="تسجيل الدخول"/>
                    </div>
                </form>
    
                <h6>ليس لديك حساب  | <a href="/StudentRegister"> سجل كطالب</a> | <a href="/TeacherRegister"> سجل كمدرس</a></h6>
            </div>
        </div>
    </section>
  )
}
