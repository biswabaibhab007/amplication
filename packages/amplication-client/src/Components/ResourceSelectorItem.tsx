import React, { useMemo } from "react";
import { Resource } from "../models";
import { truncateWithEllipsis } from "../util/truncatedWithEllipsis";
import "./CommitSelectorItem.scss";
import ResourceCircleBadge from "./ResourceCircleBadge";

type Props = {
  resource: Resource | null;
};
const CLASS_NAME = "commit-selector-item";

export const ResourceSelectorItem = ({ resource }: Props) => {

  const truncateServiceName = useMemo(() => {
    return truncateWithEllipsis(resource?.name.trim(), 15, "Service Name");
  }, [resource?.name]);

  return (
    <div className={CLASS_NAME}>
      {resource && (
        <>
          <ResourceCircleBadge type={resource.resourceType} size={"xsmall"} />
          <div className={`${CLASS_NAME}__title`}>{truncateServiceName}</div>
        </>
      )}
    </div>
  );
};
