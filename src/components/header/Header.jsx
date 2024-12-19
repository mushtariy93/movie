
import React from 'react'
import { Link} from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import { useTranslation } from 'react-i18next';
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";

const LANGUAGES = [
  { label: "Uzbek", code: "uz" },
  { label: "English", code: "en" },
  { label: "Russian", code: "ru" },
];




const Header = ({fn,val}) => {
    const { i18n, t } = useTranslation();
    function changeLang(e) {
      const lang_code = e.target.value;
      i18n.changeLanguage(lang_code);
    }

  return (
    <header className="bg-black">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="w-24 h-12">
            <img src={logo} className="w-full h-full object-contain" alt="" />
          </div>

          <nav className="flex items-center gap-x-4">
            <Link to="/" className="text-white text-lg ">
              {t("header.nav.item1")}
            </Link>
            <Link to="#" className="text-white text-lg ">
              {t("header.nav.item2")}
            </Link>
            <Link to="#" className="text-white text-lg ">
              {t("header.nav.item3")}
            </Link>
          </nav>
          <div className="flex items-center ">
            <select
              defaultValue={i18n.language}
              onChange={changeLang}
              className="  bg-gray-300 dark:bg-gray-700 dark:text-white rounded-lg py-1 px-2 outline-none"
            >
              {LANGUAGES.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
            <button
              onClick={fn}
              className={
                val
                  ? "w-12 h-7 border border-gray-400 flex items-center justify-start px-2 rounded-full outline-none duration-200"
                  : "w-12 h-7 border border-white flex items-center justify-end px-2 rounded-full outline-none duration-200"
              }
            >
              {val ? (
                <FaMoon className="text-blue-600" />
              ) : (
                <FaRegSun className="text-yellow-500" />
              )}
            </button>
          </div>

          <div class="flex items-center">
            <div class="sm:flex sm:gap-4">
              <Link
                class="rounded-md bg-red-600 px-5 py-2 text-lg font-medium text-white shadow"
                to="/login"
              >
                Login
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header





