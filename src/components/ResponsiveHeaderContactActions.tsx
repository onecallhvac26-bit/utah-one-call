import CallRoundedIcon from "@mui/icons-material/CallRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";

import {
  PHONE_HREF,
  PHONE_NUMBER,
  SMS_HREF,
} from "@/config/site";

export function ResponsiveHeaderContactActions() {
  return (
    <>
      <a
        href={PHONE_HREF}
        className="site-header-contact-action is-call"
        aria-label={`Call ${PHONE_NUMBER}`}
        title={`Call ${PHONE_NUMBER}`}
      >
        <CallRoundedIcon aria-hidden="true" />
      </a>
      <a
        href={SMS_HREF}
        className="site-header-contact-action is-text"
        aria-label={`Text ${PHONE_NUMBER}`}
        title={`Text ${PHONE_NUMBER}`}
      >
        <SmsRoundedIcon aria-hidden="true" />
      </a>
    </>
  );
}
