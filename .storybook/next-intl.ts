import en from "../messages/en.js";
import ru from "../messages/ru.js";

const messagesByLocale: Record<string, unknown> = { en, ru };

const nextIntl = {
  defaultLocale: "en",
  messagesByLocale,
};

export default nextIntl;
