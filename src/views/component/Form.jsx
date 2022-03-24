import React from "react";

function Form(props) {
    return (
        <div className="sign-in">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="row">
                        <h1 className="title text-center">Selamat Datang</h1>
                        <p className="subtitle-text text-secondary">Silahkan masuk ke aplikasi menggunakan akun anda</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-7 form-component">
                            <form action="">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address" />
                                    <div className="mt-2">
                                        <small className="hint">*Masukkan email anda yang telah terverifikasi</small>
                                    </div>
                                </div>
                                <div className="form-group mt-4">
                                    <input type="password" placeholder="Password" className="form-control" />
                                    <div className="mt-2 row">
                                        <small className="f-fp text-end"><a href="">Lupa password ?</a></small>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-primary" type="button">Masuk</button>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <small className="regis-link text-center">Tidak memiliki akun? <a href="">Daftar Yuk?</a></small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;