import { serviceSections } from "./services-data";
import { ServiceBlock } from "./ServiceBlock";

export function InstallSection() {
  return (
    <ServiceBlock
      id="install"
      service={serviceSections.install}
    />
  );
}

export function RepairSection() {
  return (
    <ServiceBlock
      id="repair"
      service={serviceSections.repair}
    />
  );
}

export function ServiceTuneUpSection() {
  return (
    <ServiceBlock
      id="service"
      service={serviceSections.service}
    />
  );
}

export function MaintenanceSection() {
  return (
    <ServiceBlock
      id="maintenance"
      service={serviceSections.maintenance}
    />
  );
}
