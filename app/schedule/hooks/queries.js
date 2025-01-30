import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useScheduleData = () => {
    const fetchSchedule = async () => {
        try {
            const response = await axios.get("http://localhost:3001/schedule");
            return response;
        } catch (err) {
            throw err;
        }
    };

    return useQuery({
        queryKey: ["schedule"],
        queryFn: fetchSchedule,
        refetchOnMount: false,
    });
};

export { useScheduleData };
