"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MAIN_CONTENT_DATA } from "@/lib/constants"

export default function MainContent() {
  const { welcome} = MAIN_CONTENT_DATA

  return (
    <div className="space-y-6 flex-grow">
      <Card>
        <CardHeader>
          <CardTitle>{welcome}</CardTitle>
        </CardHeader>
        <CardContent>badges component goes here</CardContent>
      </Card>

      <Card>
        <CardContent className=" flex flex-row justify-around pt-6">
          Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo
          num tendi nada. Não sou faixa preta cumpadi, sou preto inteiris,
          inteiris. Si num tem leite então bota uma pinga aí cumpadi! Copo
          furadis é disculpa de bebadis, arcu quam euismod magna.
        </CardContent>
      </Card>
    </div>
  );
}