import axios from "axios";
import useSWR from 'swr';

interface ProductInfoResponse {
    name: string;
    price: number;
}

// fetcher 함수 정의
const fetcher = async (url: string) => {
    const response = await axios.get<ProductInfoResponse>(url);
    return response.data;
};

// 커스텀 훅 정의
export function useProductInfoBySWR(id?: string) {
    // id가 없을 경우 빈 데이터와 함께 반환
    const url = id ? `http://localhost:8080/api/products/read/${id}` : null; // url을 null로 설정
    const { data, error, mutate } = useSWR<ProductInfoResponse>(url, fetcher);
    return {
        productInfoDataBySWR: data,
        productInfoErrorBySWR: error,
        productInfoMutateBySWR: mutate
    };
}
