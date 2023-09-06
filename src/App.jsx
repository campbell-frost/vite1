
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.signInDefault}>
      <img className={styles.footerIcon} alt="" src="/footer.svg" />
      <div className={styles.row}>
        <img className={styles.rowChild} alt="" src="/rectangle-30.svg" />
        <div className={styles.signIn}>Sign In</div>
        <div className={styles.initials}>
          <img
            className={styles.initialsChild}
            alt=""
            src="/rectangle-29.svg"
          />
          <div className={styles.tutorInitials}>Tutor Initials</div>
          <img
            className={styles.dropDownArrow}
            alt=""
            src="/drop-down-arrow.svg"
          />
        </div>
      </div>
      <img className={styles.hrIcon} alt="" src="/hr.svg" />
      <div className={styles.searchbar}>
        <img className={styles.searchbarChild} alt="" src="/rectangle-19.svg" />
        <div className={styles.searchForStudent}>Search For Student</div>
        <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      </div>
      <div className={styles.navbar}>
        <img className={styles.navbarChild} alt="" src="/line-5.svg" />
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <div className={styles.logo}>
              <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
              <div className={styles.frame2}>
                <b className={styles.mathHub}>MATH-HUB</b>
                <div className={styles.management}>MANAGEMENT</div>
              </div>
            </div>
            <div className={styles.navButtons}>
              <div className={styles.signOn}>Sign-On</div>
              <div className={styles.view}>View</div>
              <div className={styles.insert}>Insert</div>
            </div>
          </div>
          <img className={styles.userIcon} alt="" src="/user-icon@2x.png" />
        </div>
      </div>
    </div>
  );
};



export default App
