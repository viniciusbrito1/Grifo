import BannerEventos from '@/src/components/BannerEventos'
import BannerHeader from '@/src/components/BannerHeader'

export default function Eventos() {
  return (
    <div>
      <BannerHeader      />
      <BannerEventos 
        backgroundColor="#8F0B0B"
        fontColor="white"
        img="/images/papiro.jpeg"
        titulo="IMEJAM"
        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada, tellus quis laoreet dapibus, orci augue aliquam dui, non fringilla dui velit eu velit. Praesent sed imperdiet dolor, porttitor pretium erat. Curabitur orci diam, fringilla vel velit in, porta bibendum est. Nunc varius blandit eros a auctor. Donec at sapien quis turpis egestas dapibus at aliquet neque. Nulla sed placerat enim. Aliquam tempus euismod interdum."
      />
      <BannerEventos
        backgroundColor="white"
        fontColor="black"
        img="/images/lual.jpeg"
        titulo="LUAU"
        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada, tellus quis laoreet dapibus, orci augue aliquam dui, non fringilla dui velit eu velit. Praesent sed imperdiet dolor, porttitor pretium erat. Curabitur orci diam, fringilla vel velit in, porta bibendum est. Nunc varius blandit eros a auctor. Donec at sapien quis turpis egestas dapibus at aliquet neque. Nulla sed placerat enim. Aliquam tempus euismod interdum."
      />
      <BannerEventos 
        backgroundColor="#8F0B0B"
        fontColor="white"
        img="/images/papiro.jpeg"
        titulo="PAPIRO ZERO"
        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada, tellus quis laoreet dapibus, orci augue aliquam dui, non fringilla dui velit eu velit. Praesent sed imperdiet dolor, porttitor pretium erat. Curabitur orci diam, fringilla vel velit in, porta bibendum est. Nunc varius blandit eros a auctor. Donec at sapien quis turpis egestas dapibus at aliquet neque. Nulla sed placerat enim. Aliquam tempus euismod interdum."
      />

    </div>
  )
}
