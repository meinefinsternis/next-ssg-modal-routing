import type { GetStaticProps, NextPage } from "next";
import { PokemonApi } from "api/pokemon.api";
import Link from "next/link";
import { useRouter } from "next/router";
import { Modal } from "components/Modal";
import { CurrentPokemon, ListOfPokemon } from "types/Pokemon.types";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

type HomeProps = {
  listOfPokemon: ListOfPokemon;
  currentPokemon: CurrentPokemon;
};

const Home: NextPage<HomeProps> = ({ currentPokemon, listOfPokemon }) => {
  const router = useRouter();

  const handleModalClose = () => router.push("/", undefined, { shallow: true });

  const currentPokemonName = router.query.name;

  return (
    <div>
      {currentPokemonName && (
        <Modal onClose={handleModalClose}>
          <div style={{ textAlign: "center" }}>{currentPokemon.name}</div>
          <Image
            src={currentPokemon.sprites.front_shiny}
            width={150}
            height={150}
            alt={currentPokemon.name}
          />
        </Modal>
      )}
      {listOfPokemon.results.map(({ name }) => (
        <Link href={`/p/${name}`} shallow key={name}>
          <a>
            <div>{name}</div>
          </a>
        </Link>
      ))}
    </div>
  );
};

interface Params extends ParsedUrlQuery {
  name: string;
}

export const getStaticProps: GetStaticProps<any, Params> = async ({
  params,
}) => {
  const listOfPokemon = await PokemonApi.getAll();

  if (params) {
    const name = params.name;
    const currentPokemon = await PokemonApi.getOne(name);
    return {
      props: {
        listOfPokemon,
        currentPokemon,
      },
    };
  }

  return {
    props: {
      listOfPokemon,
    },
  };
};

export default Home;
