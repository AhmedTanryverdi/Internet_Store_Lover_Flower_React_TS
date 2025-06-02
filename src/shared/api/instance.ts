import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import { CONFIG } from "@/shared/model/config";
import type { ApiPaths } from "./schema";

export const fetchClient = createFetchClient<ApiPaths>({
	baseUrl: CONFIG.BASE_URL,
});

export const rqClient = createClient(fetchClient);
