import type { ESLint, Linter } from "eslint";
import {
  noHtmlWbr,
  noHtmlVideo,
  noHtmlTextarea,
  noHtmlTarget,
  noHtmlSvg,
  noHtmlSrcset,
  noHtmlSemantics,
  noHtmlSelect,
  noHtmlRuby,
  noHtmlRt,
  noHtmlRp,
  noHtmlRole,
  noHtmlRequired,
  noHtmlProgress,
  noHtmlPicture,
  noHtmlObject,
  noHtmlMeter,
  noHtmlMarquee,
  noHtmlLoadingAttribute,
  noHtmlLink,
  noHtmlLang,
  noHtmlInputText,
  noHtmlInputSubmit,
  noHtmlInputReset,
  noHtmlInputRadio,
  noHtmlInputHidden,
  noHtmlInputCheckbox,
  noHtmlForm,
  noHtmlDoctype,
  noHtmlDialog,
  noHtmlDfn,
  noHtmlButtonSubmit,
  noHtmlButtonReset,
  noHtmlBody,
  noHtmlBdi,
  noHtmlBase,
  noHtmlAudio,
  noHtmlAriaLive,
  noHtmlAriaLabelledby,
  noHtmlAriaLabel,
  noHtmlAriaHidden,
  noHtmlAriaDescribedby,
  noHtmlAnchorLinks,
  noHtmlAbbr,
  noCssWritingMode,
  noCssWordBreak,
  noCssVisibility,
  noCssUnitVmin,
  noCssUnitVmax,
  noCssUnitVh,
  noCssUnitRem,
  noCssUnitInitial,
  noCssUnitCh,
  noCssUnitCalc,
  noCssTransform,
  noCssTextUnderlineOffset,
  noCssTextShadow,
  noCssTextOverflow,
  noCssTextEmphasis,
  noCssTextEmphasisPosition,
  noCssTextDecorationThickness,
  noCssTextDecorationColor,
  noCssTextAlignLast,
  noCssTableLayout,
  noCssTabSize,
  noCssScrollSnap,
  noCssRgba,
  noCssRadialGradient,
  noCssPosition,
  noCssPaddingInlineStartEnd,
  noCssPaddingInlineBlock,
  noCssPaddingBlockStartEnd,
  noCssOverflowWrap,
  noCssOutlineOffset,
  noCssOpacity,
  noCssObjectPosition,
  noCssObjectFit,
  noCssModernColor,
  noCssMixBlendMode,
  noCssMinInlineSize,
  noCssMaxBlockSize,
  noCssMarginInline,
  noCssMarginInlineStartEnd,
  noCssMarginInlineBlock,
  noCssMarginBlockStartEnd,
  noCssListStyleImage,
  noCssLinearGradient,
  noCssLeftRightTopBottom,
  noCssJustifyContent,
  noCssIntrinsicSize,
  noCssImportant,
  noCssHyphens,
  noCssGridTemplate,
  noCssGap,
  noCssFunctionMin,
  noCssFunctionMax,
  noCssFunctionClamp,
  noCssFontKerning,
  noCssFlexWrap,
  noCssFlexDirection,
  noCssFilter,
  noCssDisplayGrid,
  noCssDisplayFlex,
  noCssConicGradient,
  noCssColumnLayoutProperties,
  noCssColumnCount,
  noCssClipPath,
  noCssBoxSizing,
  noCssBoxShadow,
  noCssBorderRadius,
  noCssBorderRadiusLogical,
  noCssBorderInlineBlock,
  noCssBorderInlineBlockLonghand,
  noCssBorderInlineBlockIndividual,
  noCssBorderImage,
  noCssBlockInlineSize,
  noCssBackgroundOrigin,
  noCssBackgroundImage,
  noCssBackgroundClip,
  noCssBackgroundBlendMode,
  noCssAspectRatio,
  noCssAnimation,
  noCssAlignItems,
  noCssAccentColor,
  noBase64Images,
} from "./rules";

const rules: ESLint.Plugin["rules"] = {
  "no-base64-images": noBase64Images,
  "no-html-wbr": noHtmlWbr,
  "no-html-video": noHtmlVideo,
  "no-html-textarea": noHtmlTextarea,
  "no-html-target": noHtmlTarget,
  "no-html-svg": noHtmlSvg,
  "no-html-srcset": noHtmlSrcset,
  "no-html-semantics": noHtmlSemantics,
  "no-html-select": noHtmlSelect,
  "no-html-ruby": noHtmlRuby,
  "no-html-rt": noHtmlRt,
  "no-html-rp": noHtmlRp,
  "no-html-role": noHtmlRole,
  "no-html-required": noHtmlRequired,
  "no-html-progress": noHtmlProgress,
  "no-html-picture": noHtmlPicture,
  "no-html-object": noHtmlObject,
  "no-html-meter": noHtmlMeter,
  "no-html-marquee": noHtmlMarquee,
  "no-html-loading-attribute": noHtmlLoadingAttribute,
  "no-html-link": noHtmlLink,
  "no-html-lang": noHtmlLang,
  "no-html-input-text": noHtmlInputText,
  "no-html-input-submit": noHtmlInputSubmit,
  "no-html-input-reset": noHtmlInputReset,
  "no-html-input-radio": noHtmlInputRadio,
  "no-html-input-hidden": noHtmlInputHidden,
  "no-html-input-checkbox": noHtmlInputCheckbox,
  "no-html-form": noHtmlForm,
  "no-html-doctype": noHtmlDoctype,
  "no-html-dialog": noHtmlDialog,
  "no-html-dfn": noHtmlDfn,
  "no-html-button-submit": noHtmlButtonSubmit,
  "no-html-button-reset": noHtmlButtonReset,
  "no-html-body": noHtmlBody,
  "no-html-bdi": noHtmlBdi,
  "no-html-base": noHtmlBase,
  "no-html-audio": noHtmlAudio,
  "no-html-aria-live": noHtmlAriaLive,
  "no-html-aria-labelledby": noHtmlAriaLabelledby,
  "no-html-aria-label": noHtmlAriaLabel,
  "no-html-aria-hidden": noHtmlAriaHidden,
  "no-html-aria-describedby": noHtmlAriaDescribedby,
  "no-html-anchor-links": noHtmlAnchorLinks,
  "no-html-abbr": noHtmlAbbr,
  "no-css-writing-mode": noCssWritingMode,
  "no-css-word-break": noCssWordBreak,
  "no-css-visibility": noCssVisibility,
  "no-css-unit-vmin": noCssUnitVmin,
  "no-css-unit-vmax": noCssUnitVmax,
  "no-css-unit-vh": noCssUnitVh,
  "no-css-unit-rem": noCssUnitRem,
  "no-css-unit-initial": noCssUnitInitial,
  "no-css-unit-ch": noCssUnitCh,
  "no-css-unit-calc": noCssUnitCalc,
  "no-css-transform": noCssTransform,
  "no-css-text-underline-offset": noCssTextUnderlineOffset,
  "no-css-text-shadow": noCssTextShadow,
  "no-css-text-overflow": noCssTextOverflow,
  "no-css-text-emphasis": noCssTextEmphasis,
  "no-css-text-emphasis-position": noCssTextEmphasisPosition,
  "no-css-text-decoration-thickness": noCssTextDecorationThickness,
  "no-css-text-decoration-color": noCssTextDecorationColor,
  "no-css-text-align-last": noCssTextAlignLast,
  "no-css-table-layout": noCssTableLayout,
  "no-css-tab-size": noCssTabSize,
  "no-css-scroll-snap": noCssScrollSnap,
  "no-css-rgba": noCssRgba,
  "no-css-radial-gradient": noCssRadialGradient,
  "no-css-position": noCssPosition,
  "no-css-padding-inline-start-end": noCssPaddingInlineStartEnd,
  "no-css-padding-inline-block": noCssPaddingInlineBlock,
  "no-css-padding-block-start-end": noCssPaddingBlockStartEnd,
  "no-css-overflow-wrap": noCssOverflowWrap,
  "no-css-outline-offset": noCssOutlineOffset,
  "no-css-opacity": noCssOpacity,
  "no-css-object-position": noCssObjectPosition,
  "no-css-object-fit": noCssObjectFit,
  "no-css-modern-color": noCssModernColor,
  "no-css-mix-blend-mode": noCssMixBlendMode,
  "no-css-min-inline-size": noCssMinInlineSize,
  "no-css-max-block-size": noCssMaxBlockSize,
  "no-css-margin-inline": noCssMarginInline,
  "no-css-margin-inline-start-end": noCssMarginInlineStartEnd,
  "no-css-margin-inline-block": noCssMarginInlineBlock,
  "no-css-margin-block-start-end": noCssMarginBlockStartEnd,
  "no-css-list-style-image": noCssListStyleImage,
  "no-css-linear-gradient": noCssLinearGradient,
  "no-css-left-right-top-bottom": noCssLeftRightTopBottom,
  "no-css-justify-content": noCssJustifyContent,
  "no-css-intrinsic-size": noCssIntrinsicSize,
  "no-css-important": noCssImportant,
  "no-css-hyphens": noCssHyphens,
  "no-css-grid-template": noCssGridTemplate,
  "no-css-gap": noCssGap,
  "no-css-function-min": noCssFunctionMin,
  "no-css-function-max": noCssFunctionMax,
  "no-css-function-clamp": noCssFunctionClamp,
  "no-css-font-kerning": noCssFontKerning,
  "no-css-flex-wrap": noCssFlexWrap,
  "no-css-flex-direction": noCssFlexDirection,
  "no-css-filter": noCssFilter,
  "no-css-display-grid": noCssDisplayGrid,
  "no-css-display-flex": noCssDisplayFlex,
  "no-css-conic-gradient": noCssConicGradient,
  "no-css-column-layout-properties": noCssColumnLayoutProperties,
  "no-css-column-count": noCssColumnCount,
  "no-css-clip-path": noCssClipPath,
  "no-css-box-sizing": noCssBoxSizing,
  "no-css-box-shadow": noCssBoxShadow,
  "no-css-border-radius": noCssBorderRadius,
  "no-css-border-radius-logical": noCssBorderRadiusLogical,
  "no-css-border-inline-block": noCssBorderInlineBlock,
  "no-css-border-inline-block-longhand": noCssBorderInlineBlockLonghand,
  "no-css-border-inline-block-individual": noCssBorderInlineBlockIndividual,
  "no-css-border-image": noCssBorderImage,
  "no-css-block-inline-size": noCssBlockInlineSize,
  "no-css-background-origin": noCssBackgroundOrigin,
  "no-css-background-image": noCssBackgroundImage,
  "no-css-background-clip": noCssBackgroundClip,
  "no-css-background-blend-mode": noCssBackgroundBlendMode,
  "no-css-aspect-ratio": noCssAspectRatio,
  "no-css-animation": noCssAnimation,
  "no-css-align-items": noCssAlignItems,
  "no-css-accent-color": noCssAccentColor,
};

const recommendedRules: Partial<Linter.RulesRecord> = {
  "react/jsx-key": "off",
};

for (const ruleName of Object.keys(rules)) {
  recommendedRules[`@react-email/${ruleName}`] = "warn";
}

const plugin: ESLint.Plugin = {
  configs: {
    recommended: {
      rules: recommendedRules,
    },
  },
  rules,
};

export default plugin;
