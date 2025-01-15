import styles from './Loader.module.css'
import Logo from '../../Images/tadalate.png'
import { MdComputer } from "react-icons/md";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={Logo} alt='Logo' className={styles.logo} />
      <h1 className={styles.message}>
        Welcome To TadalateStudio <MdComputer />
      </h1>
    </div>
  )
}

export default Loader
