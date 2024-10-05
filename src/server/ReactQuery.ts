import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface ProductInfoResponse {
    name: string;
    price: number;
}

// fetcher 함수 정의
const fetcher = async (url: string) => {
    const response = await axios.get<ProductInfoResponse>(url);
    return response.data;
};

export function useProductInfoByReactQuery(id?: string) {
    const queryClient = useQueryClient(); // QueryClient 인스턴스 가져오기

    const url = id ? `http://localhost:8080/api/products/read/${id}` : '';

    // useQuery 사용
    const { data, error, isLoading } = useQuery<ProductInfoResponse>({
        queryKey: ['productInfo', {id: id}],
        queryFn: () => fetcher(url),
        enabled: !!id, // 옵션: id가 있을 때만 쿼리 실행
    });

    const productInfoMutateByReactQuery = () => {
        if(!id) return null;
        queryClient.invalidateQueries({queryKey: ['productInfo']});
    };

    return {
        productInfoDataByReactQuery: data,
        productInfoErrorByReactQuery: error,
        productInfoIsLoadingByReactQuery: isLoading,
        productInfoMutateByReactQuery // 쿼리 무효화 함수 반환
    };
}
