import styles from './HomeSection.module.css'

const HomeSection = () => {
  return (
    <section className={styles.homeSection}>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <span>24/7 Support</span>
          <span>Easy Withdrawals</span>
          <span>Reliable Platforms</span>
        </div>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.heading}>
          Trade Like a <span className={styles.highlight}>Pro</span>
          <br />
          With ApexMarkets.
        </h1>

        <p className={styles.description}>
          Start trading with the easiest and most secure platform to
          <br />
          Trade Forex, Cryptocurrency, Commodities and MORE!
        </p>

        <div className={styles.cta}>
          <button className={styles.primaryButton}>Start Trading Now</button>
          <button className={styles.secondaryButton}>Try A Free Demo</button>
        </div>

        <p className={styles.trust}>
          Trusted by thousands of traders worldwide
        </p>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <h2>300M USD+</h2>
            <p>Paid Out</p>
          </div>
          <div className={styles.statItem}>
            <h2>10M+</h2>
            <p>of Trades Monthly</p>
          </div>
          <div className={styles.statItem}>
            <h2>3hr</h2>
            <p>Avg Payout Time</p>
          </div>
          <div className={styles.statItem}>
            <h2>100+</h2>
            <p>Countries</p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default HomeSection
