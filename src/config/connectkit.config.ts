export const ConnectKitConfig = {
  debugMode: true,
  customTheme: {
    // modal
    "--ck-border-radius": "20px",
    "--ck-body-background": "hsl(var(--background))",
    "--ck-body-background-secondary": "hsl(var(--secondary))",
    "--ck-body-background-secondary-hover-background":
      "hsl(var(--secondary-hover))",
    "--ck-body-background-tertiary": "hsl(var(--muted))",
    "--ck-modal-box-shadow": "0px 0px 0px 1px hsl(var(--border))",

    // text
    "--ck-body-color": "hsl(var(--red))",
    "--ck-body-color-muted": "hsl(var(--muted-foreground))",
    "--ck-body-color-muted-hover": "hsl(var(--secondary-foreground))",

    // button
    "--ck-primary-button-color": "hsl(var(--foreground))",
    "--ck-primary-button-background": "hsl(var(--background))",
    "--ck-primary-button-hover-background": "hsl(var(--secondary))",
    "--ck-primary-button-box-shadow": "0px 0px 0px 1px hsl(var(--border))",
    "--ck-primary-button-hover-box-shadow":
      "0px 0px 0px 1px hsl(var(--secondary))",

    "--ck-secondary-button-color": "hsl(var(--foreground))",
    "--ck-secondary-button-background": "hsl(var(--background))",
    "--ck-secondary-button-hover-background": "hsl(var(--secondary))",
    "--ck-secondary-button-box-shadow": "0px 0px 0px 1px hsl(var(--border))",
    "--ck-secondary-button-hover-box-shadow":
      "0px 0px 0px 1px hsl(var(--secondary))",

    // miscellaneous
    "--ck-dropdown-button-background": "hsl(var(--background))",
    "--ck-dropdown-background": "hsl(var(--secondary))",
    "--ck-dropdown-color": "hsl(var(--text-foreground))",
    "--ck-body-disclaimer-background": "hsl(var(--secondary))",
    "--ck-body-disclaimer-link-hover-color": "hsl(var(--secondary-foreground))",
    "--ck-spinner-color": "#fbbe16",
    "--ck-body-divider": "hsl(var(--border))",
  },
};
