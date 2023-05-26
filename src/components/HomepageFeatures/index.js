import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Basic Concepts',
    Svg: require('@site/static/img/concept.svg').default,
    description: (
      <>
        Get started with the basics of the NumBlock platform.
      </>
    ),
  },
  {
    title: 'Build a Dapp',
    Svg: require('@site/static/img/build-dapp.svg').default,
    description: (
      <>
        Build and deploy decentralized applications on NumBlock.
      </>
    ),
  },
  {
    title: 'Validators',
    Svg: require('@site/static/img/run-validator-node.svg').default,
    description: (
      <>
        Secure the NumBlock network by participating in consensus of the NumBlock protocol.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
