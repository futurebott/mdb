import React from "react";
import { Card, CardContent } from "@material-ui/core";

export default function Crad(prop){

    return(
        <Card>
            <CardContent >
            <div
            key={`repo-${prop.cardVal.id}`}
            style={{ marginTop: 20}}
          >
            <p>
              {prop.cardVal.original_title}
              <br />
            </p>
          </div>
          </CardContent>
        </Card>
        )
}