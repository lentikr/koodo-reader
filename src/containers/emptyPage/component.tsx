import React from "react";
import "./emptyPage.css";
import { emptyList } from "../../constants/emptyList";
import { Trans } from "react-i18next";
import { EmptyPageProps, EmptyPageState } from "./interface";
import emptyDark from "../../assets/images/empty-dark.svg";
import emptyLight from "../../assets/images/empty-light.svg";

import { ConfigService } from "../../assets/lib/kookit-extra-browser.min";
import DeletePopup from "../../components/dialogs/deletePopup";

class EmptyPage extends React.Component<EmptyPageProps, EmptyPageState> {
  constructor(props: EmptyPageProps) {
    super(props);
    this.state = {
      isOpenDelete: false,
    };
  }
  render() {
    const renderEmptyList = () => {
      return emptyList.map((item) => {
        return (
          <div
            className="empty-page-info-container"
            key={item.mode}
            style={
              this.props.mode === item.mode ? {} : { visibility: "hidden" }
            }
          >
            <div className="empty-page-info-main">
              <Trans>{item.main}</Trans>
            </div>
            <div className="empty-page-info-sub">
              <Trans>{item.sub}</Trans>
            </div>
          </div>
        );
      });
    };
    return (
      <>
        <div
          className="empty-page-container"
          style={
            this.props.isCollapsed
              ? { width: "calc(100vw - 100px)", left: "100px" }
              : {}
          }
        >
          <div
            className="empty-illustration-container"
            style={{ width: "calc(100% - 50px)" }}
          >
            <img
              src={
                ConfigService.getReaderConfig("appSkin") === "night" ||
                (ConfigService.getReaderConfig("appSkin") === "system" &&
                  ConfigService.getReaderConfig("isOSNight") === "yes")
                  ? emptyDark
                  : emptyLight
              }
              alt=""
              className="empty-page-illustration"
            />
          </div>

          {renderEmptyList()}
        </div>
      </>
    );
  }
}

export default EmptyPage;
