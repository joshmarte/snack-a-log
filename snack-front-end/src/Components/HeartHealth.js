import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

export default function HeartHealth({ snackHealth }) {
  if (snackHealth.is_healthy) {
    return (
      <aside>
        <img src={heartSolid} alt="healthy food" />
      </aside>
    );
  } else if (!snackHealth.is_healthy) {
    return (
      <aside>
        <img src={heartOutline} alt="unhealthy food" />
      </aside>
    );
  }
}
