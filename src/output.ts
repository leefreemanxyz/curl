import * as core from "@actions/core";
import { AxiosResponse } from "axios";
import { INPUT_LOG_RESPONSE } from "./requestconf";
import * as util from "./util";

const setOutput = (res: void | AxiosResponse<any>) => {
  if (!res) {
    throw new Error("No response from request");
  }

  const responseOutput = util.buildOutput(res);

  if (INPUT_LOG_RESPONSE) {
    core.info(`Response: ${responseOutput}`);
  }

  core.setOutput("response", responseOutput);
};

export default setOutput;
