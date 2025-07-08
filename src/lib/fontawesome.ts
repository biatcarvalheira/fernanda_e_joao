// src/lib/fontawesome.ts
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";

// Prevent Font Awesome from adding its CSS automatically
config.autoAddCss = false;

library.add(faInstagram);
