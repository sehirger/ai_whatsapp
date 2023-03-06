import {
  buildGenerationRequest,
  executeGenerationRequest,
  onGenerationComplete,
} from "./stability/generation/helprs";
import * as Generation from "./stability/generation/generation_pb";
import { client, metadata } from "../configs/stabilityAI";

export const stabilityImageCreator = (prompts: any) => {
  let resImage: any;
  const stabilityImageCreator = buildGenerationRequest(
    "stable-diffusion-512-v2-1",
    {
      type: "text-to-image",
      prompts: prompts,
      width: 512,
      height: 512,
      samples: 1,
      cfgScale: 13,
      steps: 25,
      sampler: Generation.DiffusionSampler.SAMPLER_K_DPMPP_2M,
    }
  );

  resImage = executeGenerationRequest(client, stabilityImageCreator, metadata)
    .then(onGenerationComplete)
    .catch((error) => {
      console.error("Failed to make text-to-image request:", error);
    });

  return resImage;
};
