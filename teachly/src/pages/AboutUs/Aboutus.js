import styles from "./aboutus.module.css";
function Aboutus() {
  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.profileContainer}>
          <div className={styles.profileHeader}>
            <header>
              <h2>
                Teachly - to platforma, na której każdy znajdzie prywatnego
                nauczyciela, zgodnie ze swoimi kryteriami, a korepetytorzy
                zdobywają nowych klientów
              </h2>
            </header>
          </div>
          <div>
            <p>Jędrzej Szadejko</p>
          </div>
          <div>
            <p>Tymoteusz Szczepkowski</p>
          </div>
          <div>
            <p>Macin Panuś</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutus;
