import { normalize } from './nomalize'

export type FontSize = {
  /**
   * 36
   */
  h1: number
  /**
   * 32
   */
  h2: number
  /**
   * 30
   */
  h3: number
  /**
   * 26
   */
  h4: number
  /**
   * 22
   */
  h5: number
  /**
   * 18
   */
  h6: number
  /**
   * 15
   */
  body1: number
  /**
   * 13
   */
  body2: number
  /**
   * 13
   */
  button: number
  /**
   * 15
   */
  subtitle1: number
  /**
   * 13
   */
  subtitle2: number
  /**
   * 12
   */
  caption1: number
  /**
   * 12
   */
  caption2: number
  /**
   * 11
   */
  label: number
  /**
   * 10
   */
  tinyLabel: number
}

export type Font = {
  size: FontSize
}

export const font: Font = {
  size: {
    /**
     * 36
     */
    h1: normalize(36),
    /**
     * 32
     */
    h2: normalize(32),
    /**
     * 30
     */
    h3: normalize(30),
    /**
     * 26
     */
    h4: normalize(26),
    /**
     * 22
     */
    h5: normalize(22),
    /**
     * 18
     */
    h6: normalize(18),
    /**
     * 15
     */
    body1: normalize(15),
    /**
     * 13
     */
    body2: normalize(13),
    /**
     * 13
     */
    button: normalize(12),
    /**
     * 15
     */
    subtitle1: normalize(15),
    /**
     * 13
     */
    subtitle2: normalize(13),
    /**
     * 12
     */
    caption1: normalize(12),
    /**
     * 12
     */
    caption2: normalize(12),
    /**
     * 11
     */
    label: normalize(11),
    /**
     * 10
     */
    tinyLabel: normalize(10),
  },
}
