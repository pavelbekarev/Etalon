"use client";

import React, { useState } from "react";
import { User, Basket2 } from "@/app/imgs/imgIndex/imgIndex";
import Image from "next/image";
import "./Registration.scss";

const Registration = () => {
  const [isRegShown, setIsRegShown] = useState(false);
  const [isEntShown, setIsEntShown] = useState(false);

  const handClose = (): void => {
    setIsRegShown(false);
    setIsEntShown(false);
  };

  const Enter = (): void => {
    setIsRegShown(false);
    setIsEntShown(true);
  };

  const Register = (): void => {
    setIsEntShown(false);
    setIsRegShown(true);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        className={
          isRegShown || isEntShown
            ? "reg_background_active"
            : "reg_background_unactive"
        }
      ></div>
      <Image src={User} alt="" onClick={() => setIsRegShown(true)} />

      <div
        className={`Reg ${isRegShown || isEntShown ? "active" : "unactive"}`}
      >
        <div className="Reg_elements">
          <div className="Reg_close">
            <Image src={Basket2} alt="" onClick={handClose} />
          </div>
          <div className="Reg_Title" onClick={handClose}>
            Добро пожаловать!
          </div>

          {isRegShown === isEntShown && (
            <div className="def_form">
              <form action="#" method="POST" className="space-y-2">
                <div className="mt-1">
                  <input
                    id="reg_name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="input_"
                    placeholder="ФИО"
                  />
                </div>

                <div>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="input_"
                      placeholder="Электронная почта"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-1">
                    <input
                      id="tel"
                      name="tel"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="input_"
                      placeholder="+7"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      required
                      autoComplete="name"
                      className="input_"
                      placeholder="Оптовый / розничный покупатель"
                    />
                  </div>
                </div>

                <div className="but_cont">
                  <button type="submit" className="button">
                    Зарегистрироваться
                  </button>
                </div>

                <div>
                  <p className="or">
                    Уже есть аккаунт?
                    <span
                      onClick={Enter}
                      style={{ cursor: "pointer", color: "brown" }}
                    >
                      (Войти)
                    </span>
                  </p>
                </div>
              </form>
            </div>
          )}

          {isRegShown && (
            <div className="def_form">
              <form action="#" method="POST" className="space-y-2">
                <div className="mt-1">
                  <input
                    id="reg_name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="input_"
                    placeholder="ФИО"
                  />
                </div>

                <div>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="input_"
                      placeholder="Электронная почта"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-1">
                    <input
                      id="tel"
                      name="tel"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="input_"
                      placeholder="+7"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      required
                      autoComplete="name"
                      className="input_"
                      placeholder="Оптовый / розничный покупатель"
                    />
                  </div>
                </div>

                <div className="but_cont">
                  <button type="submit" className="button">
                    Зарегистрироваться
                  </button>
                </div>

                <div>
                  <p className="or">
                    Уже есть аккаунт?
                    <span
                      onClick={Enter}
                      style={{ cursor: "pointer", color: "brown" }}
                    >
                      (Войти)
                    </span>
                  </p>
                </div>
              </form>
            </div>
          )}

          {isEntShown && (
            <div className="def_form">
              <form action="#" method="POST" className="space-y-2">
                <div className="mt-1">
                  <input
                    id="ent_name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="input_"
                    placeholder="ФИО"
                  />
                </div>

                <div>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="input_"
                      placeholder="Электронная почта"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-1">
                    <input
                      id="tel"
                      name="tel"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="input_"
                      placeholder="+7"
                    />
                  </div>
                </div>

                <div className="but_cont">
                  <button type="submit" className="button">
                    Войти
                  </button>
                </div>

                <div>
                  <p className="or">
                    Еще нет аккаунта?
                    <span
                      onClick={Register}
                      style={{ cursor: "pointer", color: "brown" }}
                    >
                      (Зарегистрироваться)
                    </span>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
