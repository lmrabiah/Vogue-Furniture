import logo from "./logo.svg";
import "./App.css";

const styles = {
  textUnderImgThePrice: {
    textAlign: "center",
    fontFamily: "monospace",
    color: "#8B4513",
  },

  textUnderImgTheName: {
    borderBottomStyle: "ridge",
    textAlign: "center",
    fontFamily: "monospace",
    color: "#8B4513",
    paddingBottom: "5px",
  },

  textBeforeTheLineHeader: {
    textAlign: "center",
    fontWeight: "100",
    paddingBottom: "10px",
    fontFamily: "monospace",
    borderBottomStyle: "ridge",
    borderBottomColor: "#8B4513",
    color: "#bc5a45",
  },

  textHeader: {
    fontFamily: "monospace",
    color: "#bc5a45",
    fontWeight: "100",
    fontSize: "32px",
    marginLeft: "730px",
  },

  imgLogo: {
    width: "300px",
    height: "300px",
    marginLeft: "715px",
    marginBottom: "10px",
  },

  itemImg: {
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    height: "300px",
    marginLeft: "50px",
  },

  totalPicStyle: {
    alignItem: "center",
    justifyContent: "center",
    display: "flex",
  },
};
function App() {
  return (
    <div>
      <div>
        <h1 style={styles.textHeader}>Vogue Furniture</h1>
        <h2 style={styles.textBeforeTheLineHeader}>
          "Explore luxury furniture and accessories from the world's finest
          brands and artisans"
        </h2>
        <img
          style={styles.imgLogo}
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>
      <div style={styles.totalPicStyle}>
        <div>
          <img
            style={styles.itemImg}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRGtpqnKCEKfS_q4kSSYYZZe1STU3Xm16gFg&usqp=CAU"
            alt="Ludlow trunk"
          />
          <p style={styles.textUnderImgTheName}>Ludlow trunk</p>
          <p style={styles.textUnderImgThePrice}>470 KD</p>
        </div>

        <div>
          <img
            style={styles.itemImg}
            src="data:image/jpeg;base64,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"
            alt="Gilded Vista Wall Mirror"
          />
          <p style={styles.textUnderImgTheName}>Ludlow trunk</p>
          <p style={styles.textUnderImgThePrice}>230 KD</p>
        </div>

        <div>
          <img
            style={styles.itemImg}
            src="https://i.pinimg.com/originals/3d/72/d1/3d72d1ba27928a4bc90ef174f92bfa56.jpg"
            alt="Gardenia Bench"
          />
          <p style={styles.textUnderImgTheName}>Gardenia Bench</p>
          <p style={styles.textUnderImgThePrice}>550 KD</p>
        </div>
      </div>
    </div>
  );
}

export default App;
