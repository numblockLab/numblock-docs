import React from 'react';
import classnames from 'classnames';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function FooterLink({to, href, label, ...props}) {
  const toUrl = useBaseUrl(to);
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

const FooterLogo = ({url, alt}) => (
  <img className="footer__logo" alt={alt} src={url} />
);

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;

  const { copyright, links = [], logo = {} } = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={classnames('footer', {
        'footer--dark': footer.style === 'dark',
      })}
    >
      <div className="container">
        <div className="row">
          {links.map((linkItem, i) => (
            <div key={i} className="col footer__col">
              {linkItem.title != null ? (
                <h4 className="footer__title">{linkItem.title}</h4>
              ) : null}
              {linkItem.items != null &&
              Array.isArray(linkItem.items) &&
              linkItem.items.length > 0 ? (
                <div className="footer__items">
                  {linkItem.items.map((item, key) =>
                    item.html ? (
                      <div
                        key={key}
                        className="footer__item"
                        dangerouslySetInnerHTML={{
                          __html: item.html,
                        }}
                      />
                    ) : (
                      <div
                        key={item.href || item.to}
                        className="footer__item"
                      >
                        <FooterLink {...item} />
                      </div>
                    )
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        {(logo || copyright) && (
          <div className="text--center">
            {logo && logo.src && (
              <div className="margin-bottom--sm">
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLogoLink}
                  >
                    <FooterLogo alt={logo.alt} url={logoUrl} />
                  </a>
                ) : (
                  <FooterLogo alt={logo.alt} url={logoUrl} />
                )}
              </div>
            )}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}


export default Footer;
