import { css, keyframes } from "@emotion/react";
import { Loader2 } from "lucide-react";

export interface Building {
  id: number;
  tags: { [key: string]: string | undefined };
  geometry?: { lat: number; lng: number }[];
}

const spinAnimation = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

export function BuildingHeights({
  buildings,
  loading,
}: {
  buildings: Building[];
  loading: boolean;
}) {
  return (
    <div
      css={css({
        position: "relative",
      })}
    >
      {loading && (
        <div
          css={css({
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#555",
          })}
        >
          <Loader2
            css={css({
              animation: `${spinAnimation} 1s linear infinite`,
            })}
            size={16}
          />
          正在获取建筑信息...
        </div>
      )}
      <ul
        css={css({
          overflow: "scroll",
          zIndex: 999,
          position: "absolute",
          top: "1rem",
          height: "80vh",
        })}
      >
        {buildings.map((b) => (
          <li key={b.id}>
            <div>建筑 {b.id}</div>
            <div>高度: {b.tags.height || "无高度数据"}</div>
            <div>位置/轮廓:</div>
            {b.geometry ? (
              <ul>
                {b.geometry.map((pt, index) => (
                  <li key={index}>
                    ({pt.lat.toFixed(5)}, {pt.lng.toFixed(5)})
                  </li>
                ))}
              </ul>
            ) : (
              <div>无几何信息</div>
            )}
            <div>其他标签: {JSON.stringify(b.tags)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
