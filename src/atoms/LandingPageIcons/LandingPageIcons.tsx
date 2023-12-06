import styles from "./LandingPageIcons.module.css";

function LandingPageIcons() {
  return (
    <div className={styles.landingpageIconsWrapperr}>
      <div className={styles.landingpageIconsContainer}>
        <svg className={styles.landingpageIcons} width="64" height="64">
          <circle cx="32" cy="32" r="28" />
          <path
            d="M12.91 32c0 7.565 4.4 14.08 10.764 17.177l-9.105-24.945A19.022 19.022 0 0 0 12.911 32ZM32 51.09c2.217 0 4.35-.39 6.346-1.084l-.135-.254-5.872-16.077-5.72 16.636a18.72 18.72 0 0 0 5.381.778Zm2.623-28.042 6.905 20.527 1.912-6.363c.812-2.64 1.439-4.535 1.439-6.177 0-2.369-.847-3.994-1.557-5.246-.982-1.59-1.879-2.928-1.879-4.484 0-1.76 1.32-3.385 3.215-3.385h.237A19.021 19.021 0 0 0 32 12.91a19.072 19.072 0 0 0-15.942 8.598l1.219.034c1.997 0 5.077-.254 5.077-.254 1.05-.051 1.168 1.455.135 1.573 0 0-1.032.136-2.2.187l6.973 20.68 4.18-12.523-2.979-8.157a34.118 34.118 0 0 1-1.997-.17c-1.032-.067-.914-1.641.119-1.59 0 0 3.147.253 5.026.253 1.997 0 5.077-.253 5.077-.253 1.032-.051 1.167 1.455.135 1.573 0 0-1.032.119-2.2.187ZM41.595 48.5A19.09 19.09 0 0 0 51.09 32c0-3.317-.846-6.43-2.335-9.155a18.022 18.022 0 0 1-1.32 8.8L41.595 48.5ZM32 54a22 22 0 1 1 0-44 22 22 0 0 1 0 44Z"
            fill="#fff"
          />
        </svg>

        <svg className={styles.landingpageIcons} width="52" height="46">
          <path d="M25.876 14.838 17.916.79c.264-.27.568-.446.872-.564-2.347.772-3.425 3.408-3.425 3.408L.822 29.291a7.535 7.535 0 0 0-.236 2.17h15.872l9.418-16.623Z" />
          <path d="m25.875 14.838 9.418 16.623h15.872a7.534 7.534 0 0 0-.236-2.17L36.387 3.634S35.307.998 32.963.226c.3.118.608.295.872.564l-7.96 14.048Z" />
          <path d="M25.875 14.838 33.835.79a2.482 2.482 0 0 0-.872-.564A4.3 4.3 0 0 0 31.84.018H19.91c-.4.017-.776.092-1.122.208a2.483 2.483 0 0 0-.873.564l7.96 14.048Z" />
          <path d="M16.46 31.46 8.591 45.349s-.261-.128-.616-.391C9.09 45.818 10.177 46 10.177 46h30.905c1.706 0 2.06-.651 2.06-.651l.015-.009-7.863-13.88H16.46Z" />
          <path d="M16.46 31.46H.59c.08 1.886.898 2.989.898 2.989l.597 1.036.068.095 1.299 2.28 2.915 5.075c.086.206.185.394.29.573.04.061.077.128.12.186l.034.052a5.6 5.6 0 0 0 1.168 1.212c.355.266.616.39.616.39l7.867-13.888Z" />
          <path d="M35.293 31.46h15.872c-.08 1.886-.898 2.989-.898 2.989l-.597 1.036-.068.095-1.299 2.28-2.916 5.075a4.663 4.663 0 0 1-.29.573c-.04.061-.076.128-.119.186l-.034.052a5.6 5.6 0 0 1-1.168 1.212c-.355.266-.617.39-.617.39L35.293 31.46Z" />
        </svg>

        <svg className={styles.landingpageIcons} width="166" height="40">
          <path d="m.792 31.198.18-5.47V.16H4.74v13.287h.078C6.184 11.1 8.583 9.551 12.04 9.551c5.237 0 8.952 4.36 8.926 10.785 0 7.56-4.773 11.326-9.494 11.326-3.07 0-5.495-1.187-7.07-3.973H4.25l-.18 3.509H.74h.052Zm3.973-8.463c0 .49.077.955.18 1.393.749 2.658 2.968 4.515 5.78 4.515 4.025 0 6.424-3.302 6.424-8.127 0-4.23-2.193-7.869-6.295-7.869-2.606 0-5.057 1.806-5.857 4.722-.077.438-.232.954-.232 1.574v3.792Zm33.746 8.463-.31-2.658h-.128c-1.187 1.651-3.457 3.148-6.476 3.148-4.283 0-6.476-3.019-6.476-6.063 0-5.109 4.541-7.92 12.745-7.87v-.412c0-1.754-.49-4.902-4.798-4.902-1.961 0-4.025.62-5.496 1.574l-.877-2.529c1.754-1.135 4.283-1.883 6.94-1.883 6.476 0 8.05 4.412 8.05 8.643v7.92c0 1.832.077 3.613.361 5.057l-3.535-.025Zm-.567-10.785c-4.206-.077-8.953.645-8.953 4.773 0 2.503 1.651 3.664 3.638 3.664 2.76 0 4.49-1.755 5.108-3.535.13-.387.207-.8.233-1.212l-.026-3.69ZM48.496.16h3.844v31.038h-3.844V.16Zm10.217 27.116c1.135.748 3.147 1.522 5.057 1.522 2.786 0 4.102-1.393 4.102-3.147 0-1.832-1.084-2.838-3.922-3.896-3.767-1.368-5.598-3.457-5.598-5.986 0-3.405 2.76-6.218 7.301-6.218 2.141 0 4.025.62 5.212 1.316l-.955 2.787a7.972 7.972 0 0 0-4.334-1.213c-2.27 0-3.535 1.316-3.535 2.89 0 1.754 1.264 2.528 4.025 3.586 3.663 1.393 5.547 3.225 5.547 6.372 0 3.716-2.89 6.347-7.92 6.347-2.323 0-4.49-.567-5.96-1.445l.98-2.915Zm30.676 3.922-.31-2.658h-.129c-1.186 1.651-3.457 3.148-6.475 3.148-4.283 0-6.476-3.019-6.476-6.063 0-5.109 4.54-7.92 12.745-7.87v-.412c0-1.754-.49-4.902-4.799-4.902-1.96 0-4.025.62-5.495 1.574l-.877-2.529c1.754-1.135 4.282-1.883 6.94-1.883 6.476 0 8.05 4.412 8.05 8.643v7.92c0 1.832.077 3.613.36 5.057l-3.534-.025Zm-.568-10.785c-4.205-.077-8.952.645-8.952 4.773 0 2.503 1.651 3.664 3.638 3.664 2.76 0 4.515-1.755 5.108-3.535.129-.387.206-.8.232-1.212l-.026-3.69Zm10.553-4.644-.181-5.727h3.354l.181 3.405h.129c1.186-2.012 3.147-3.896 6.656-3.896 2.89 0 5.057 1.755 5.986 4.232h.077a8.674 8.674 0 0 1 2.348-2.761c1.264-.955 2.657-1.496 4.67-1.496 2.786 0 6.94 1.831 6.94 9.21v12.462h-3.767V19.226c0-4.076-1.496-6.501-4.592-6.501-2.193 0-3.896 1.625-4.541 3.509a6.194 6.194 0 0 0-.31 1.935v13.08h-3.715V18.581c0-3.354-1.496-5.805-4.412-5.805-2.399 0-4.154 1.935-4.773 3.845a5.777 5.777 0 0 0-.309 1.883v12.771h-3.767V15.847l.026-.078ZM140.73 4.108c.052 1.315-.955 2.347-2.451 2.347-1.367 0-2.322-1.057-2.322-2.347-.026-1.29.98-2.374 2.27-2.4h.129c1.419 0 2.374 1.032 2.374 2.4Zm-4.309 27.09V10.042h3.845v21.156h-3.845Zm25.439-3.303h-.077c-1.135 2.116-3.509 3.767-6.889 3.767-4.928 0-8.952-4.283-8.952-10.707 0-7.92 5.108-11.404 9.571-11.404 3.303 0 5.47 1.626 6.502 3.664h.077l.129-3.173h3.638l-.129 5.805V39.84h-3.844V27.947l-.026-.052Zm0-9.314c0-.516-.051-1.135-.18-1.625-.568-2.348-2.606-4.36-5.496-4.36-3.973 0-6.372 3.354-6.372 8.127 0 4.205 2.012 7.869 6.243 7.869 2.503 0 4.644-1.522 5.496-4.206.18-.593.283-1.212.309-1.831V18.58Z" />
        </svg>

        <svg className={styles.landingpageIcons} width="62" height="62">
          <circle cx="30.93" cy="31" r="26.688" />
          <path
            d="M44.248 19.96c.238-1.535-1.222-2.747-2.587-2.147L14.469 29.75c-.979.43-.907 1.913.108 2.236l5.608 1.786c1.07.34 2.23.165 3.164-.481l12.642-8.735c.382-.263.797.28.471.615l-9.1 9.382c-.883.91-.708 2.453.354 3.119l10.19 6.39c1.142.716 2.612-.004 2.826-1.385l3.516-22.717Z"
            fill="#fff"
          />
          <defs>
            <linearGradient
              id="a"
              x1="30.93"
              y1="4.313"
              x2="30.93"
              y2="57.688"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#37BBFE" />
              <stop offset="1" stopColor="#007DBB" />
            </linearGradient>
          </defs>
        </svg>

        <svg className={styles.landingpageIcons} width="120" height="60">
          <path d="m48.093 36.229 2.388 6.27h-4.627l2.24-6.27Zm-.896-2.1-5.224 13.73h1.94l1.343-3.73h5.82l1.343 3.73h1.94l-5.224-13.73h-1.94.002Zm28.2 13.742h1.8V34.139h-1.8V47.87Zm-18.35-8.07c.597-.896 1.8-1.642 2.985-1.642 2.388 0 3.582 1.642 3.582 4.03v5.82h-1.8v-5.522c0-1.94-1.045-2.687-2.388-2.687-1.493 0-2.537 1.493-2.537 2.836v5.224h-1.8v-9.54h1.8l.15 1.494.008-.013Zm8.06 5.234c0-2.1 1.94-3.284 4.18-3.284 1.343 0 2.24.3 2.537.597v-.3c0-1.493-1.194-2.24-2.388-2.24-1.045 0-1.94.448-2.24 1.343l-1.642-.746c.3-.896 1.493-2.24 3.88-2.24 2.24 0 4.18 1.343 4.18 4.03v5.672h-1.642v-1.343h-.15c-.448.746-1.493 1.642-3.134 1.642-1.94 0-3.582-1.194-3.582-3.134l.001.003Zm6.715-1.197s-.746-.597-2.24-.597c-1.8 0-2.537 1.045-2.537 1.8 0 1.045 1.045 1.493 1.94 1.493 1.343 0 2.836-1.194 2.836-2.687" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m79.735 52.05 2.1-4.925-3.73-8.657h1.8l2.836 6.567 2.836-6.567h1.8l-5.82 13.582h-1.822Zm26.27-10.45c-.448-1.194-1.493-1.94-2.537-1.94-1.493 0-2.836 1.343-2.836 3.284 0 1.941 1.343 3.284 2.836 3.284 1.045 0 2.1-.746 2.537-1.8l1.493.896c-.746 1.642-2.24 2.687-4.03 2.687-2.537 0-4.627-2.24-4.627-5.075 0-2.985 2.1-5.075 4.627-5.075 1.8 0 3.284 1.045 4.03 2.687l-1.493 1.045v.007Z"
          />
          <path d="M112.422 48.169c2.388 0 3.582-1.343 3.582-2.985 0-3.582-5.224-2.24-5.224-4.328 0-.746.597-1.194 1.642-1.194s2.1.448 2.537 1.194l1.045-1.045c-.597-.746-2.24-1.8-3.73-1.8-2.24 0-3.433 1.343-3.433 2.985 0 3.433 5.373 2.24 5.373 4.03 0 .896-.597 1.493-1.8 1.493s-1.8-.746-2.388-1.493L108.7 46.08c.896.896 2.24 2.1 3.73 2.1l-.008-.012Zm-17.015-.298h1.8v-9.552h-1.8v9.552Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M96.153 33.7c.746 0 1.194.597 1.194 1.194 0 .746-.597 1.194-1.194 1.194s-1.194-.597-1.194-1.194.597-1.194 1.194-1.194Zm-2.537 12.687.3 1.343h-1.8c-1.642 0-2.388-1.194-2.388-2.985V40.1h-1.8v-1.8h1.8v-2.818h1.8v2.836h2.1v1.8h-2.1v4.925c0 1.343 1.045 1.343 2.1 1.343l-.012.001Z"
          />
          <path d="M51.048 18.959v2.24h5.224c-.15 1.193-.597 2.1-1.194 2.686-.746.746-1.94 1.642-4.03 1.642-3.134 0-5.672-2.537-5.672-5.82 0-3.134 2.537-5.82 5.672-5.82 1.8 0 2.985.746 3.88 1.493l1.493-1.493c-1.343-1.194-2.985-2.24-5.373-2.24-4.328 0-8.06 3.582-8.06 7.9 0 4.319 3.73 7.9 8.06 7.9 2.388 0 4.18-.745 5.522-2.24 1.493-1.492 1.94-3.433 1.94-5.075 0-.448 0-1.045-.15-1.343h-7.313l.001.17Zm13.282-1.8c-2.836 0-5.075 2.1-5.075 5.075 0 2.974 2.24 5.074 5.075 5.074a5.03 5.03 0 0 0 5.075-5.075c0-2.985-2.24-5.075-5.075-5.075Zm0 8.2c-1.493 0-2.836-1.344-2.836-3.135 0-1.79 1.343-3.123 2.836-3.123 1.493 0 2.837 1.2 2.837 3.13s-1.343 3.133-2.836 3.133v-.006Zm24.47-7.157c-.597-.597-1.493-1.194-2.836-1.194-2.537 0-4.776 2.24-4.776 5.076 0 2.835 2.24 5.075 4.776 5.075 1.194 0 2.24-.598 2.687-1.194h.15v.745c0 1.94-1.045 2.985-2.687 2.985-1.343 0-2.24-1.044-2.537-1.8l-1.94.747c.597 1.343 2.1 2.985 4.478 2.985 2.687 0 4.925-1.493 4.925-5.373V17h-2.1v1.195l-.14.008Zm-2.537 7.164c-1.493 0-2.687-1.343-2.687-3.133 0-1.791 1.194-3.134 2.687-3.134 1.493 0 2.687 1.343 2.687 3.134 0 1.79-1.194 3.133-2.687 3.133Zm-10.897-8.2c-2.836 0-5.075 2.1-5.075 5.075 0 2.976 2.24 5.076 5.075 5.076a5.03 5.03 0 0 0 5.075-5.076c.15-2.985-2.24-5.075-5.075-5.075Zm0 8.2c-1.493 0-2.836-1.343-2.836-3.133 0-1.791 1.343-3.134 2.836-3.134 1.493 0 2.836 1.194 2.836 3.134s-1.343 3.133-2.836 3.133ZM92.7 11.794h2.24v15.523H92.7V11.794Zm8.358 13.582c-1.194 0-1.94-.597-2.537-1.492l6.866-2.837-.3-.596c-.448-1.195-1.8-3.285-4.328-3.285-2.687 0-4.776 2.1-4.776 5.075a5.029 5.029 0 0 0 5.075 5.076c2.388 0 3.73-1.494 4.328-2.24l-1.8-1.195c-.597.896-1.343 1.493-2.537 1.493l.009.002Zm-.15-6.27c.896 0 1.642.448 1.94 1.194l-4.627 1.94c0-2.24 1.493-3.133 2.687-3.133Z" />
          <path d="M28.948 16.672v26.217c0 2.934 2.026 4.568 4.171 4.568 1.986 0 4.171-1.39 4.171-4.568V16.87c0-2.689-1.986-4.369-4.17-4.369-2.186 0-4.172 1.853-4.172 4.17Z" />
          <path d="M18.024 29.98v12.91c0 2.933 2.026 4.568 4.171 4.568 1.986 0 4.171-1.39 4.171-4.568V30.178c0-2.69-1.986-4.37-4.17-4.37-2.185 0-4.172 1.854-4.172 4.172ZM11.271 47.458a4.171 4.171 0 1 0 0-8.342 4.171 4.171 0 0 0 0 8.342Z" />
        </svg>
      </div>
    </div>
  );
}

export default LandingPageIcons;