/**
 * Converts a string to uppercase.
 *
 * @param {string} text - The string to convert to uppercase.
 * @returns {string} The converted uppercase string.
 */
export function toUpperCase(text: string): string {
  return text.toLocaleUpperCase();
}

/**
 * Converts a string to lowercase.
 *
 * @param {string} text - The string to convert to lowercase.
 * @returns {string} The converted lowercase string.
 */
export function toLowerCase(text: string): string {
  return text.toLocaleLowerCase();
}

/**
 * Converts a string into capital case.
 *
 * @param {string} text - The string to convert.
 * @returns {string} The string in capital case.
 */
export function capitalize(text: string) {
  return toLowerCase(text).replace(/(?:^|\s)\S/g, function (char) {
    return char.toUpperCase();
  });
}

/**
 * Checks if a substring is contained within a text.
 *
 * @param {string} text - The text to search within.
 * @param {string} substring - The substring to search for.
 * @returns {boolean} - True if the substring is contained within the text, false otherwise.
 */
export function isSubstringContained(text: string, substring: string): boolean {
  return text.includes(substring);
}
