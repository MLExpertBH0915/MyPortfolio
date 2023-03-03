import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Work Experience',
    paragraph: "I have worked as a software engineer and machine learning engineer for several companies. And I've done a lot of projects to solve real world problems. I have worked on agile teams and have served as a team leader."
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Duolingo ∙ Full-time ∙ Pittsburgh, Pennsylvania, USA
                </div>
                <h3 className="mt-0 mb-12">
                  Senior Software Engineer / Machine Learning Engineer
                </h3>
                <p className="m-0">
                  ∙ End-to-end deployment to constantly updating the systems to reflect new technological innovations and research<br />
                  ∙ Application of transformers for breast histopathology using transfer learning of ViT, BeiT and CaiT<br />
                  ∙ Design and Implementation of Regression Model for Prediction of Cardiovascular Disease<br />
                  ∙ Develop and maintain scalable, high-performing web applications using modern frameworks and tools<br />
                  ∙ Face Mask Detection using SSD model to extract face data and classification of the detected faces<br />
                  ∙ Telegram chatbot implementation using Open API and Gpt-3<br />
                  ∙ Experience in integrating API operations and third-party services into web applications.<br />
                  ∙ Design and implement powerful and user-friendly front-end interfaces using technologies such as React and AngularJS.


                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  World Economic Forum AI and Machine Learning ∙ Full-time ∙ San Francisco, California, USA
                </div>
                <h3 className="mt-0 mb-12">
                  Machine Learning Engineer / Software Engineer
                </h3>
                <p className="m-0">
                  ∙ Contribute to software system design to appropriately incorporate machine learning elements into product features<br />
                  ∙ Implementation of CNN model for Google landmark detection<br />
                  ∙ Design and implementation of an employee attrition prediction system using a regression model<br />
                  ∙ Design and Implementation of Autonomous Vehicle Lane Detection<br />
                  ∙ Conversational bot using deep learning and creating endpoint<br />
                  ∙ Develop RESTful APIs and backend services using frameworks such as Express.js and Ruby on Rails<br />
                  ∙ Database design and management with experience working with SQL and NoSQL databases.

                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Nuance Communications ∙ Contract ∙  Burlington, Massachusetts, USA
                </div>
                <h3 className="mt-0 mb-12">
                  Full stack developer / Machine Learning Engineer
                </h3>
                <p className="m-0">
                  ∙ Develop highly scalable service to process billions of requests per day and solve complex software systems problems by leverage state-of-the-art technology<br />
                  ∙ Using ARIMA model for anomaly detection and visualization<br />
                  ∙ Predictive model that protects customers from churn<br />
                  ∙ Design and implementation of facial feature detection system using deep learning<br />
                  ∙ Skin cancer classification model using convolutional neural network<br />
                  ∙ Face recognition and identification for attendance system of company<br />
                  ∙ Image synthesis using GAN model<br />
                  ∙ Clustering Model for Analyzing Customers' Online Shopping Intent<br />
                  ∙ Deploy and manage web applications using cloud platforms such as AWS and Google Cloud Platform<br />
                  ∙ Develop and maintain responsive, mobile-first web applications using technologies such as Bootstrap and Foundation<br />

                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Nuance Communications ∙ Contract ∙  Burlington, Massachusetts, USA
                </div>
                <h3 className="mt-0 mb-12">
                  Machine Learning Engineer / Software engineer
                </h3>
                <p className="m-0">
                  ∙ Statistical analysis and cost prediction of product using Linear Regression, Logistic Regression, Decision Tree, SVM, XGBOOST, AdaBOOST and Ensemble Learning<br />
                  ∙ Usage of librosa for speech emotion recognition system<br />
                  ∙ Sentiment analysis of customers to obtain classified works using R∙ Recurrent Neural Network(RNN) model to predict next word based on typing history<br />
                  ∙ Fashion recommendation system using transfer learning<br />
                  ∙ Build web applications using the React, Node, and Django frameworks and the Java programming language<br />
                  ∙ Leveraging React for front-end development, Node and Django for backend, and Java for enterprise applications, we implement a full-stack solution with a focus on performance, scalability, and security.


                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;