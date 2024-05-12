import { Bell, CircleX, Search, ShoppingCart } from "lucide-react";
import logoHorizontal from "../../assets/images/logo-brand-horizontal.png";
import InputIcon from "../elements/InputIcon";
import Dropdown from "../elements/Dropdown";
import Card from "./Card";
const Navbar = () => {
  return (
    <header className="navbar sticky bg-base-100 px-4 sm:px-10 md:px-20 justify-between items-center border border-b-slate-200 shadow-sm">
      {/** Logo */}
      <a href="/" className="w-15 md:w-40">
        <img src={logoHorizontal} alt="logo" />
      </a>

      {/** Input search */}
      <InputIcon className="w-7/12 input-sm">
        <Search size={20} color="#9ca3af" />
      </InputIcon>

      {/** Cart */}
      <Dropdown type="dropdown-hover" className="dropdown-end">
        <Dropdown.Trigger tabIndex="0" className="hover:bg-transparent">
          <Dropdown.Trigger.ObjectTrigger className="">
            <ShoppingCart size={20} color="#0eb596" />
          </Dropdown.Trigger.ObjectTrigger>
        </Dropdown.Trigger>
        <Dropdown.Content tabIndex="0" className="bg-transparent">
          <Card>
            <Card.Body className="items-center text-center">
              <CircleX size={44} color="#ff5724" />
              <Card.Title className="text-slate-700 text-lg font-bold">
                Wah, keranjang belanjamu kosong
              </Card.Title>
              <p className="text-slate-500">
                Yuk, isi dengan barang-barang impianmu!
              </p>
              <Card.Action>
                <button className="btn btn-primary btn-sm btn-outline">
                  Mulai Belanja!
                </button>
              </Card.Action>
            </Card.Body>
          </Card>
        </Dropdown.Content>
      </Dropdown>

      {/** Bell */}
      <Dropdown type="dropdown-hover" className="dropdown-end">
        <Dropdown.Trigger tabIndex="0" className="hover:bg-transparent">
          <Dropdown.Trigger.ObjectTrigger className="">
            <Bell size={20} color="#0eb596" />
          </Dropdown.Trigger.ObjectTrigger>
        </Dropdown.Trigger>
        <Dropdown.Content tabIndex="0" className="bg-transparent">
          <Card>
            <Card.Body className="items-center text-center">
              <CircleX size={44} color="#ff5724" />
              <Card.Title className="text-slate-700 text-lg font-bold">
                Kamu belum ada Notifikasi nih
              </Card.Title>
              <p className="text-slate-500">Silahkan cek lagi secara berkala</p>
            </Card.Body>
          </Card>
        </Dropdown.Content>
      </Dropdown>

      <div className="action gap-3">
        <button className="btn btn-sm btn-outline btn-primary text-md font-bold tracking-wide">
          Masuk
        </button>
        <button className="btn btn-sm btn-primary text-md font-bold tracking-wide">
          Daftar
        </button>
      </div>

      {/** User */}
      {/** <Dropdown type="dropdown-hover" variant="dropdown-end">
        <Dropdown.Trigger
          tabIndex="0"
          className="btn-circle avatar"
          text="Abdul Rahman"
        >
          <Dropdown.Trigger.ObjectTrigger className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </Dropdown.Trigger.ObjectTrigger>
        </Dropdown.Trigger>
        <Dropdown.Content tabIndex="0" className="w-52 bg-base-100 shadow">
          <ul>
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </Dropdown.Content>
      </Dropdown> */}
    </header>
  );
};

export default Navbar;
