import { useEffect } from "react";

const AMPLIFY_ARENA_URL = "https://amplify.egsync.com/amplify-arena";

const AmplifyArena = () => {
  useEffect(() => {
    window.location.replace(AMPLIFY_ARENA_URL);
  }, []);

  return null;
};

export default AmplifyArena;
