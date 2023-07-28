import React from "react";
import { MainTitle } from "../../style/MainStyle";

const CountryWine = () => {
  return (
    <div>
      {/* 타이틀 */}
      <MainTitle>
        <h2>
          <span>새로운 취향과 맛의 세계를 보여줄</span>
          <p>
            <span className="clearfix">
              <i></i>국가별 추천 와인<i></i>
            </span>
          </p>
        </h2>
      </MainTitle>
    </div>
  );
};

export default CountryWine;
