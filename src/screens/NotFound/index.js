import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
class index extends Component {
    
  render() {
    const { t } = this.props;
    return (
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>{t('404ErrorPage')}</h1>
              </div>
              <div class="col-sm-6">
                
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="error-page">
            <h2 class="headline text-warning"> 404</h2>
            <div class="error-content">
              <h3>
                <i class="fas fa-exclamation-triangle text-warning"></i> Oops!
               {t('Pagenotfound')}
              </h3>
              <p>
               {t('404Detial')}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withTranslation()(index));
