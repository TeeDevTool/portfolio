import { Device } from "@app/common/enum";
import { toLowerCase } from "./string.uitl";

/**
 * Checks if the given degree represents an upside-down orientation (180 degrees rotation).
 *
 * @param {number} degree - The degree value to check.
 * @returns {boolean} - True if the degree is upside-down, false otherwise.
 */
export function isUpsideDown(degree: number): boolean {
  return (degree - 180) % 360 === 0;
}

/**
 * Determines if the user's device is a laptop or PC based on the user agent.
 * @returns {boolean} True if the device is a laptop or PC, false otherwise.
 */
export function isLaptopOrPC(): boolean {
  if (!navigator?.userAgent) return false;
  const userAgent = toLowerCase(navigator.userAgent);
  return userAgent.includes(Device.Window) || userAgent.includes(Device.Mac);
}
