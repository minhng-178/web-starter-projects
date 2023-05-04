import styles from "./Button.module.scss";
import clsx from "clsx";
//thuc te ne su dung 2 thu vien sau
//classname
//clsx: thang nay no la ham`

function Button({primary, disabled}) {
  const classes = clsx(styles.btn, {
    [styles.primary] : primary,
    [styles.disabled] : disabled,
    'd-flex': false
  })

  return (
    <button className={classes}>
      Click me!
    </button>
    // <>
    // <button className={styles.btn}>
    //   Click me!
    // </button>
    // <button className={clsx(styles.btn, {
    //   [styles.active]: true
    // })}>
    //   Click me!
    // </button>
    // </>
  )
}

export default Button