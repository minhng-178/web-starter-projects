import classNames from "classnames";
import styles from "./AccountItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b8b0f311ea58e4b26b54e6289cd15c22~c5_100x100.jpeg?x-expires=1683727200&x-signature=NAQdrN8OG3pbF08Kbai32jvy0Y0%3D"
        alt="hoa"
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Van a</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>nguyen van a</span>
      </div>
    </div>
  );
}

export default AccountItem;
