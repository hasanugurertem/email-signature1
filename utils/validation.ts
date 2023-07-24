import isEmail from 'validator/lib/isEmail';

export function validateEmail(email: string): boolean {
  // used the validator library here for basic checks
  // tried to use some third party services first to check the emails but they require signups for API keys, so leaving this like this for now
  return isEmail(email);
}

export function validateLink(link: string): boolean {
  try {
    const url = new URL(link);
    const hostname = url.hostname;
    const pathname = url.pathname;

    switch (true) {
      // i don't know if this is the right way of approach here, the hosts can (but most likely would not) change the path of how they generate their user profile URLs and this wouldn't work
      // also, some of these may accept anything that matches these paths but is not a user profile URL, like a random page on the host

      case hostname.includes("linkedin.com") && pathname.startsWith("/in/"):
        return true;
      case hostname.includes("github.com") && pathname.split("/").length === 2:
        return true;
      case hostname.includes("youtube.com") && pathname.startsWith("/user/"):
        return true;
      case hostname.includes("twitter.com") && pathname.split("/").length === 2:
        return true;
      case hostname.includes("facebook.com") && pathname.startsWith("/"):
        return true;
      case hostname.includes("instagram.com") &&
        pathname.split("/").length === 2:
        return true;
      default:
        return false;
    }
  } catch (e) {
    return false;
  }
}
