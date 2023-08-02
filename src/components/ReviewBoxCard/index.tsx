import { useForm } from "react-hook-form";
import "./style.css";
import { AxiosRequestConfig } from "axios";
import { BASE_URL, requestBackend } from "utils/requests";
import { Review } from "utils/typesUtils";
import { toast } from "react-toastify";

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewBoxCard = ({ movieId, onInsertReview }: Props) => {
  // logica para POST da avaliação
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: "POST",
      baseURL: BASE_URL,
      url: "/reviews",
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        console.log("Salvo");
        setValue("text", "");
        toast.success("Sua avaliação foi salva com sucesso.")
        // dispara evento que foi inserido uma nova review
        onInsertReview(response.data);
      })
      .catch((error) => {
        console.log("Erro:", error);
        toast.error("Não foi possível salvar a sua avaliação. Tente novamente.");
      });
  };

  return (
    <div className="card-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("text", { required: "Campo Obrigatório" })}
          type="text"
          id="review"
          name="text"
          className="form-control"
        />
        <div>{errors.text?.message}</div>
        <button type="submit" className="btn btn-primary">
          SALVAR AVALIACAO
        </button>
      </form>
    </div>
  );
};

export default ReviewBoxCard;
