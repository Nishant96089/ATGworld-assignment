import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import dropdown from "../assets/dropdown.png";
import cancel from "../assets/cancel.png";
import { IoSearch } from "react-icons/io5";
import Modal from "./Modal";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navContainer}>
        <a href="#">
          <img src={logo} alt="logo" className={styles.logoImg} />
        </a>

        <form className={`${styles.formContainer} d-flex`} role="search">
          <button className={styles.searchContainer}>
            <IoSearch className={styles.IoSearch} />
          </button>

          <input
            type="text"
            placeholder="Search for your favourite groups in ATG"
            className={styles.inputContainer}
          />
        </form>
        {/* Button Trigger Modal  */}

        <button
          className={`${styles.modalBtn} btn`}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal" // Ensure this matches your modal's id
        >
          <span>Create account.</span>{" "}
          <span className={styles.freeText}>It's free!</span>
          <img src={dropdown} alt="dropdown" />
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered position-relative">
            <img
              src={cancel}
              alt="cancel"
              className={styles.cancel}
              data-bs-dismiss="modal"
            />
            <div className="modal-content">
              <Modal></Modal>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
