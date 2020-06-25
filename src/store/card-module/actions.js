import Axios from "axios";

const CARDS_FUNCTION_URL =
  "https://us-central1-kard-37937.cloudfunctions.net/cards";

export async function getCardData(context) {
  let res = await Axios.get(`${CARDS_FUNCTION_URL}/`);
  console.log(res);
}
