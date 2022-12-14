import React from 'react';
import {InputText} from 'primereact/inputtext';
import {Menubar} from 'primereact/menubar';
import {Image} from 'primereact/image';

export interface NavBarProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AllPokemonNavbar({onSearch}: NavBarProps) {
  return (
      <Menubar
          className="px-3 h-4rem"
          start={<NavBarStart/>}
          end={<NavBarEnd onSearch={onSearch}/>}
      />
  );
}

function NavBarStart() {
  return <Image src="/pokedex-logo.png" alt="Logo" width="37"/>;
}

function NavBarEnd({onSearch}: Partial<NavBarProps>) {
  return <>
    <span className="p-input-icon-left">
      <i className="pi pi-search"/>
      <InputText
          placeholder="Search"
          type="search"
          className="p-inputtext-sm"
          onChange={onSearch}
      />
    </span>
  </>;
}

